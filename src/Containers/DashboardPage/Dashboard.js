import React from 'react';
import classes from './DashboardPage.module.css';
import Chart from 'react-apexcharts'
import Notification from '../../Components/Notification/Notification';
import NotificationRow from '../../Components/NotificationRow/NotificationRow';

class DashboardPage extends React.Component{

  state={
    responseData:JSON.parse(localStorage.getItem("Data")).dasbhoardPage,
    latestChartOptions: {
        chart: {
          id: "Latest Hits",
          toolbar:{
            show:false
        },
           
        },
        tooltip:{
               enabled:false
           },
        xaxis: {
          categories:JSON.parse(localStorage.getItem("Data")).dasbhoardPage.latestHits.months
        }
        
      },
    latestChartSeries: [
        {
          name: "Latest Hits",
          data: JSON.parse(localStorage.getItem("Data")).dasbhoardPage.latestHits.latest
        },
        {
            name: "Popular Hits",
            data: JSON.parse(localStorage.getItem("Data")).dasbhoardPage.latestHits.popular
          },
        {
            name: "Featured",
            data: JSON.parse(localStorage.getItem("Data")).dasbhoardPage.latestHits.featured
          }
      ],
      PerformanceChartOptions: {
        chart: {
          id: "Performance",
          type:"bar",
          toolbar:{
            show:false
        },
          
        },
        
        plotOptions:{
            bar:{
                horizontal:true
            }
        },
        
        
        tooltip:{
               enabled:false
           },
        xaxis: {
          categories:Object.keys(JSON.parse(localStorage.getItem("Data")).dasbhoardPage.performance)
        },
        fill:{
            colors:["#3889FC"]
        }
      },
    PerformanceChartSeries:[{
        name:"Hits",
        data: Object.values(JSON.parse(localStorage.getItem("Data")).dasbhoardPage.performance)
    }],
    storageChartSeries: Object.values(JSON.parse(localStorage.getItem("Data")).dasbhoardPage.storage),
            storageChartOptions: {
              chart: {
                type: 'pie',
              },
              labels:Object.keys(JSON.parse(localStorage.getItem("Data")).dasbhoardPage.storage),
            }
  }
  
  render(){
  return (
    <div>
    <h3 className={classes.UserHeading}>Welcome Back <span>{localStorage.getItem("username")}</span></h3>
    <main>
    <div className={classes.Main}>
    <div className={classes.ChartWrapper}>
    <h3>Latest Hits</h3>
    <Chart options={this.state.latestChartOptions}
            series={this.state.latestChartSeries}
            type="line"
            width="100%"/>
    </div>

    <div className={classes.ChartWrapper}>
    <h3>Performance</h3>
    <Chart options={this.state.PerformanceChartOptions}
            series={this.state.PerformanceChartSeries}
            type="bar"
            width="100%"/>
    </div>

    <div className={classes.ChartWrapper}>
    <h3>Storage Information</h3>
    <Chart options={this.state.storageChartOptions}
            series={this.state.storageChartSeries}
            type="pie"
            width="100%"/>
    </div>

    <div className={classes.ChartWrapper}>
    <h3>Notification List</h3>
    <div className={classes.NotificationWrapper}>
    {
        this.state.responseData.notifications.map(item=>{
            return <Notification message={item.message} time={item.time} image={item.pic}/>
        })
    }
    </div>
    </div>
    </div>
    
    <div className={classes.OrderList}>
        <h3>Orders List</h3>
        <div className={classes.TableSection}>
        <table>
            <thead>
                <tr>
                    <th>Order no.</th>
                    <th>Status</th>
                    <th>Operators</th>
                    <th>Location</th>
                    <th>Distance</th>
                    <th>Start Date</th>
                    <th>EST Delivery due</th>  
                </tr>
            </thead>
            <tbody>
            {
                this.state.responseData.orders.map(item=>{
                    return <NotificationRow order={item}/>
                })
            }
            </tbody>
        </table>
        </div>
    </div>
    </main>
    </div>
  );

  }
}
export default DashboardPage;
