import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @Column({
    type: DataType.TEXT,
  })
  name!: string;
}
