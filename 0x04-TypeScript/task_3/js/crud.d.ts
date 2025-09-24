// task_3/js/crud.d.ts
/// <reference path="./interface.ts" />
import { RowID, RowElement } from './interface';

export declare module 'crud' {
  export declare function insertRow(row: RowElement): RowID;
  export declare function deleteRow(rowId: RowID): void;
  export declare function updateRow(rowId: RowID, row: RowElement): RowID;
}

export declare function insertRow(row: RowElement): number {
  throw new Error('Function not implemented.');
}


export declare function updateRow(newRowID: number, updatedRow: RowElement) {
  throw new Error('Function not implemented.');
}


export declare function deleteRow(newRowID: number) {
  throw new Error('Function not implemented.');
}
