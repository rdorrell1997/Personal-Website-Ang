import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{

  jobList: any = [];

  constructor(private jobServiceService: JobServiceService) { }
  
  ngOnInit(): void {
    this.jobServiceService.getAllJobs().subscribe(list =>{
      this.jobList = list;
    })
  }
}
