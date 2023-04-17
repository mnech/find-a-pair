import {
  Model,
  Column,
  Table,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user';

@Table({
  tableName: 'topic',
})
export class Topic extends Model<Topic> {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  title!: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  user_id!: number;
}
