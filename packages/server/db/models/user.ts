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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @PrimaryKey
  override id!: number;

  @Column({
    type: DataType.TEXT,
  })
  name!: string;
}
