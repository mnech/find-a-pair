import {
  Model,
  Column,
  Table,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'theme',
})
export class Theme extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  override id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
