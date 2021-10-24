import { Component, OnInit } from '@angular/core';
import { MainService, Users } from '../main.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { chartProperty } from './chart-config';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  listData: Array<Users>;
  unTouchedData: Array<Users>;
  showSpinner: boolean = false;
  // chart config
  datasetProperties: any = chartProperty.datasetProperties;
  chartOptionsProperties: any = chartProperty.chartOptionsProperties;
  public userChartData: ChartDataSets[] = [{ data: [] }];
  public userChartLabels: Label[] = [];
  public userChartOptions: ChartOptions = {
    ...this.chartOptionsProperties,
    tooltips: {
      mode: 'single'
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end'
      }
    },
    legend: {
      labels: {
        fontSize: 10,
        padding: 10,
        boxWidth: 12,
      },
      position: 'bottom',
    }
  };
  public userChartPlugins = [pluginDataLabels];
  public userChartLegend = true;
  public userChartType = 'bar';

  constructor(
    private _mainS: MainService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this._mainS.getAllListData().then((res: Array<Users>) => {
      this.listData = res;
      this.unTouchedData = res;
      this.showSpinner = false;
      this.prepareChartData(this.unTouchedData);
    }).catch(err => {
      console.log("Error => ", err.message);
    })
  }

  prepareChartData(allData) {
    let allSalaries = [];
    let allUsers = [];
    const tenUsersData = this.listData.filter((data, index) => index < 10);
    tenUsersData.forEach(function (values) {
      allSalaries.push(parseInt((values.salary.substring(1)).replace(/,/g, '')));
      allUsers.push(values.name);
    });
    if (allSalaries && allUsers) {
      this.initUserSalaryChart(allSalaries, allUsers);
    }
  }
  viewDetails(list: Users) {
    this.router.navigate([list.id], { relativeTo: this.activeRoute, state: list });
  }


  filterData(query: string) {
    let queryInLowerCase = query.toLowerCase();
    if (queryInLowerCase === '' || queryInLowerCase.length === 0) {
      this.listData = this.unTouchedData;
    } else {
      this.listData = this.unTouchedData.filter((data) =>
        data.name.toLowerCase().includes(queryInLowerCase) ||
        data.role.toLowerCase().includes(queryInLowerCase) ||
        data.place.toLowerCase().includes(queryInLowerCase) ||
        data.date.toLowerCase().includes(queryInLowerCase) ||
        data.salary.toLowerCase().includes(queryInLowerCase));
    }
  }

  initUserSalaryChart(value, label) {
    this.userChartData = [
      {
        ...this.datasetProperties,
        data: value,
        label: 'Salary in $',
        backgroundColor: [
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
          'rgba(100, 135, 104, 0.9)',
        ],
        hoverBackgroundColor: [
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
          'rgba(100, 135, 104, 1)',
        ],
        borderWidth: 0
      }
    ];
    this.userChartLabels = label;
  }
}
