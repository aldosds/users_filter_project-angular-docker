import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  // foods = [
  //   {
  //     value: 'Teste',
  //     viewValue: 'Teste'
  //   }
  // ];

  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  onFilter() {
    console.log(this.filterOptions);
  }
}
