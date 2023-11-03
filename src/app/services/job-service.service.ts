import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobServiceList: any = [
    {
      id: 1,
      title: "Relationship Banker",
      description: "Build relationships with each customer and look for ways to help them grow their finances, make their lives easier with helpful product and service recomendations, run transactions such as deposits and withdraws, perform account maintenance and updates, and manage branch vault and cash management",
      duration: "1.5 years",
      employer: "Regions Bank"
    },
    {
      id: 2,
      title: "Data Processing Operator",
      description: "Ensure all transactions balance throughout the day and all branches credits and debits balance at the end of each banking day, manage files coming in from the Federal Reserve, organize branch transactional work, and perform daily end of day processing for the bank to prepare for the next business day.",
      duration: "1.5 years",
      employer: "Citizens National Bank of Tennessee"
    },
    {
      id: 3,
      title: "Financial Service Representative Float",
      description: "Build relationships with each customer and look for ways to help them grow their finances, make their lives easier with helpful product and service recomendations, float between branches to help with shortages and aid during peak hours.",
      duration: "3 months",
      employer: "Citizens National Bank of Tennessee"
    }
  ]
  constructor() { }
  
  getJobs(): Observable<any> {
    return of(this.jobServiceList);
  }
}
