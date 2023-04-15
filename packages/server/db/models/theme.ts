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
  timestamps: false,
  tableName: 'theme',
})
export class Theme extends Model<Theme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name!: string;
}
