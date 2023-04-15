import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'user',
})
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  override id!: number;

  @Column({
    type: DataType.TEXT,
  })
  name!: string;
}
