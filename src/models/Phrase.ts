import {Model, DataTypes} from 'sequelize';

import {sequelize} from '../instances/pg';


export interface PhraseInstance extends Model{
  id: number;
  author: string;
  txt: string;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase',{
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  author: {
    type: DataTypes.STRING,
    // get(){
    //   let raw = this.getDataValue('name');
    //   return raw.toUpperCase();
    // }
  },
  // firstLetterOfName:{
  //   type: DataTypes.VIRTUAL,
  //   get(){
  //     let name: string = this.getDataValue('name');
  //     return name.charAt(0);
  //   }
  // },
  txt: {
    type: DataTypes.STRING,
    // get(){
    //   let raw = this.getDataValue('name');
    //   return raw.toUpperCase();
    // }
  },
  // age: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 18,
  //   set(value: number){
  //     if (value < 18) {
  //       value = 18;
  //     }
  //     this.setDataValue('age', value)
  //   }
  // }
},{
  tableName: 'phrases',
  timestamps: false
})