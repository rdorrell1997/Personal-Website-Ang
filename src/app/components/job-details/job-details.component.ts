import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{

  selectedJob: string = "";
  jobDetails: any = [];

  constructor(private JobService: JobServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {  
    // console.log(this.actRoute.snapshot.paramMap);
    this.selectedJob = this.actRoute.snapshot.paramMap.get("jobId") ?? "";
    this.JobService.getJob(this.selectedJob).subscribe(details => {
      this.jobDetails = details;
    })
    // console.log(this.jobDetails);
  }
}
