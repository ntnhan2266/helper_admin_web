import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { UtilsService } from 'app/helper/utils.service';

export class Setting {
    daysToReview: number;

    constructor() {
        this.daysToReview = 0;
    }
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  setting = new Setting();

  constructor(
    private _settingService: SettingsService,
    private _utilService: UtilsService
  ) {}

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this._settingService.get().subscribe(result => {
      if (!result.errorCode) {
        this.setting = result.setting;
      }
    });
  }

  public updateSetting() {
      this._settingService.update(this.setting).subscribe(result => {
        if (!result.errorCode) {
            this._utilService.showNotification('top', 'right', 'Update settings successfully', this._utilService.type.success);
          }
      });
  }
}
