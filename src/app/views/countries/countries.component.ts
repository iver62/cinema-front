import { Component, OnInit } from '@angular/core';

export interface Employee {
  id?: number;
  name?: string;
  position?: string;
  office?: string;
  age?: number;
  startDate?: Date;
  salary?: number;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public employees: Employee[] = [];
  public filters: Employee = {};

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        name: 'Peter',
        position: 'System Architect',
        office: 'Edinburgh',
        age: 61,
        startDate: new Date('2011/04/25'),
        salary: 320800
      },
      {
        id: 2,
        name: 'Michael',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63,
        startDate: new Date('2011/07/25'),
        salary: 170750
      },
      {
        id: 3,
        name: 'Paul',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: 66,
        startDate: new Date('2009/01/12'),
        salary: 86000
      },
      {
        id: 4,
        name: 'Jack',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: 22,
        startDate: new Date('2012/03/29'),
        salary: 433060
      },
      {
        id: 5,
        name: 'Patrick',
        position: 'Accountant',
        office: 'Tokyo',
        age: 33,
        startDate: new Date('2008/11/28'),
        salary: 162700
      },
      {
        id: 6,
        name: 'Andrew',
        position: 'Integration Specialist',
        office: 'New York',
        age: 61,
        startDate: new Date('2012/12/02'),
        salary: 372000
      },
      {
        id: 7,
        name: 'Suzanne',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: 59,
        startDate: new Date('2012/08/06'),
        salary: 137500
      },
      {
        id: 8,
        name: 'Bruce',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: 55,
        startDate: new Date('2010/10/14'),
        salary: 327900
      },
      {
        id: 9,
        name: 'Jennifer',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: 39,
        startDate: new Date('2009/09/15'),
        salary: 205500
      },
      {
        id: 10,
        name: 'Rose',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: 23,
        startDate: new Date('2008/12/13'),
        salary: 103600
      },
      {
        id: 11,
        name: 'Kurt',
        position: 'Office Manager',
        office: 'London',
        age: 30,
        startDate: new Date('2008/12/19'),
        salary: 90560
      },
      {
        id: 12,
        name: 'Sean',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: 22,
        startDate: new Date('2013/03/03'),
        salary: 342000
      },
      {
        id: 13,
        name: 'Tyler',
        position: 'Regional Director',
        office: 'San Francisco',
        age: 36,
        startDate: new Date('2008/10/16'),
        salary: 470600
      },
      {
        id: 14,
        name: 'Lewis',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: 43,
        startDate: new Date('2012/12/18'),
        salary: 313500
      },
      {
        id: 15,
        name: 'Leon',
        position: 'Regional Director',
        office: 'London',
        age: 19,
        startDate: new Date('2010/03/17'),
        salary: 385750
      },
      {
        id: 16,
        name: 'Michelle',
        position: 'Marketing Designer',
        office: 'London',
        age: 66,
        startDate: new Date('2012/11/27'),
        salary: 198500
      },
      {
        id: 17,
        name: 'Tom',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: 64,
        startDate: new Date('2010/06/09'),
        salary: 725000
      },
      {
        id: 18,
        name: 'Anthony',
        position: 'Systems Administrator',
        office: 'New York',
        age: 59,
        startDate: new Date('2009/04/10'),
        salary: 237500
      },
      {
        id: 19,
        name: 'Mark',
        position: 'Software Engineer',
        office: 'London',
        age: 41,
        startDate: new Date('2012/10/13'),
        salary: 132000
      },
      {
        id: 20,
        name: 'Eric',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: 35,
        startDate: new Date('2012/09/26'),
        salary: 217500
      },
      {
        id: 21,
        name: 'Charles',
        position: 'Development Lead',
        office: 'New York',
        age: 30,
        startDate: new Date('2011/09/03'),
        salary: 345000
      },
      {
        id: 22,
        name: 'Rachel',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: 40,
        startDate: new Date('2009/06/25'),
        salary: 675000
      },
      {
        id: 23,
        name: 'Morgan',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: 21,
        startDate: new Date('2011/12/12'),
        salary: 106450
      },
      {
        id: 24,
        name: 'Sally',
        position: 'Sales Assistant',
        office: 'Sydney',
        age: 23,
        startDate: new Date('2010/09/20'),
        salary: 85600
      },
      {
        id: 25,
        name: 'Emily',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: 47,
        startDate: new Date('2009/10/09'),
        salary: 1200000
      },
      {
        id: 26,
        name: 'Kate',
        position: 'Developer',
        office: 'Edinburgh',
        age: 42,
        startDate: new Date('2010/12/22'),
        salary: 92575
      },
      {
        id: 27,
        name: 'James',
        position: 'Regional Director',
        office: 'Singapore',
        age: 28,
        startDate: new Date('2010/11/14'),
        salary: 357650
      },
      {
        id: 28,
        name: 'Christian',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: 28,
        startDate: new Date('2011/06/07'),
        salary: 206850
      },
      {
        id: 29,
        name: 'Hugh',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: 48,
        startDate: new Date('2010/03/11'),
        salary: 850000
      },
      {
        id: 30,
        name: 'Joan',
        position: 'Regional Marketing',
        office: 'Tokyo',
        age: 20,
        startDate: new Date('2011/08/14'),
        salary: 163000
      },
      {
        id: 31,
        name: 'William',
        position: 'Integration Specialist',
        office: 'Sydney',
        age: 37,
        startDate: new Date('2011/06/02'),
        salary: 95400
      },
      {
        id: 32,
        name: 'Georges',
        position: 'Developer',
        office: 'London',
        age: 53,
        startDate: new Date('2009/10/22'),
        salary: 114500
      },
      {
        id: 33,
        name: 'Jessica',
        position: 'Technical Author',
        office: 'London',
        age: 27,
        startDate: new Date('2011/05/07'),
        salary: 145000
      },
      {
        id: 34,
        name: 'Audrey',
        position: 'Team Leader',
        office: 'San Francisco',
        age: 22,
        startDate: new Date('2008/10/26'),
        salary: 235500
      },
      {
        id: 35,
        name: 'Joseph',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        age: 46,
        startDate: new Date('2011/03/09'),
        salary: 324050
      },
      {
        id: 36,
        name: 'Mary',
        position: 'Marketing Designer',
        office: 'San Francisco',
        age: 47,
        startDate: new Date('2009/12/09'),
        salary: 85675
      }
    ];
  }

  filter() {
    
  }

}
