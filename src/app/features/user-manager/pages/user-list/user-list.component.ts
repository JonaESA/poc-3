import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { UserService } from '../../services/user.service';
import { LoadOptions } from 'devextreme/data';
import { ApplicationUserGetListDxRequest } from '../../interfaces/user';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(private userService: UserService) {
    this.getDataFromServer();
  }

  // VARIABLES

  store!: CustomStore;

  isDisabled: boolean = true;
  selectedRowId: string = '';

  // toast
  isVisible: boolean = false;
  type = ['error', 'info', 'success', 'warning'];
  message: string = '';

  // METODOS

  getDataFromServer() {
    this.store = new CustomStore({
      key: 'applicationUserId',
      load: (options: LoadOptions) => {

        // preparando el request
        let request: ApplicationUserGetListDxRequest = {
          loadOptions: JSON.stringify(options)
        };
        console.log('request: ', request); // ba3 no borrar nos sirve para la api

        // la llamada
        return lastValueFrom(this.userService.getAllDx(request))
        .then((response) => {
          console.log('response: ', response);
          return response.applicationUserListDx;
        })
        .catch(() => {
          throw 'data loading error';
        });

      }
    });
  }
  
  onSelectionChanged(event: SelectionChangedEvent) {
    //console.log('event: ', event);
    this.isDisabled = (event.selectedRowsData.length > 0) ? false : true;

    this.selectedRowId = event.currentSelectedRowKeys[0];
    console.log('selectedRowId: ', this.selectedRowId)
  }

  delete() {
    this.userService.delete(this.selectedRowId).subscribe({
      next: v => {
        console.log('objetivo eliminado: ', v)
        this.getDataFromServer();
      },
      error: e => console.log('error: ', e)
    });
  }

  // applyFilterTypes = [{
  //   key: 'auto',
  //   name: 'Immediately',
  // }, {
  //   key: 'onClick',
  //   name: 'On Button Click',
  // }];

  // currentFilter = this.applyFilterTypes[0].key;

}
