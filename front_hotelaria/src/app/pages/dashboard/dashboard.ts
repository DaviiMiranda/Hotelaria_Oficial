import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService, DashboardStats } from '../../services/dashboard-service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
    stats: DashboardStats | null = null;
    loading = true;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.dashboardService.getStats().subscribe({
            next: (data) => {
                this.stats = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load dashboard stats', err);
                this.loading = false;
            }
        });
    }
}
