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
import { HasMany } from 'sequelize';

@Table({
  tableName: 'topic',
})
export class Topic extends Model<Topic> {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  title!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  @ForeignKey(() => User)
  user_id!: number;
}
