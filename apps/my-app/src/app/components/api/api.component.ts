import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'angular-universal-test-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {

  response = ''

  constructor(
    private readonly http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http.get('/api/test').subscribe(res => {
      console.log('res', res)
      this.response = JSON.stringify(res)
    })
  }
}
