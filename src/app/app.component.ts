import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public unformattedText: string = ''
  public formattedText: string = ''
  public header: string[] = []
  public data: string[] = []
  public exampleText = `Date:
  04/08/2022
  Name:
  Eric`

  ngOnInit(): void {
    this.buildCSV(this.unformattedText)
  }

  public buildCSV = (unformattedText: string) => {
    this.formattedText = unformattedText
    this.header = []
    this.data = []
    const rows = unformattedText.split('\n')
    rows.forEach((row, i) => {
      if (i % 2 === 0) {
        this.header.push(row.trim().replace(':', ''))
      } else {
        this.data.push(row.trim().replace('\t', ''))
      }
    })
  }
}
