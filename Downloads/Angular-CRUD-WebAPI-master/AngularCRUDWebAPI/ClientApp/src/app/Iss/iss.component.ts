import { Component, Input } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material'
import { NoteComponent } from '../modules/note/note.component'
import { IssService } from './iss.service'

@Component({
  selector: 'iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.scss'],
  providers: [IssService]
})

export class IssComponent {
  @Input() left: number
  @Input() top: number

  locationInterval = null
  timestamp: string = null;
  constructor(private issService: IssService, public dialog: MatDialog) { }


  ngOnInit() {
    this.getLocation()

    this.locationInterval = setInterval(() => this.getLocation(), 2000)
  }

  ngOnDestroy() {
    clearInterval(this.locationInterval)
  }

  getLocation() {
    this.issService.getLocation()
      .subscribe((data: { iss_position: { latitude: number, longitude: number}, timestamp: any  }) => {
        this.top = this.getTop(data.iss_position.latitude);
        this.left = this.getLeft(data.iss_position.longitude);
        this.timestamp = this.getTime(data.timestamp);
      })
  }

  getTop(latitude) {
    console.log('latitude:', latitude)
    const top = Math.abs((Number(latitude) - 90) / 180)
return top;
    console.log('top:', top)
    
  }

  getLeft(longitude) {
    console.log('longitude:', longitude)
    const left = Math.abs((Number(longitude) + 180) / 360) * 100
return left;
  }

  getTime(timeStamp) {
    console.log('timeStamp:', timeStamp)
    var theDate = new Date(timeStamp * 1000);
    return  theDate.toISOString();
  }

  addNote(): void {
    const dialogRef = this.dialog.open( NoteComponent,{
      width: '80%',
      height:'50%',
      closeOnNavigation: true ,
      data:{x:this.getTop, y:this.getLeft}
    });
  }
}

