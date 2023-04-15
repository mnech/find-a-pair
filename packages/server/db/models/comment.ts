import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  CreatedAt,
  AutoIncrement,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './user';
import { Topic } from './topic';

@Table({
  tableName: 'comment',
  updatedAt: false,
})
export class Comment extends Model<Comment> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  user_id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  @ForeignKey(() => Topic)
  topic_id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
  })
  text!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  title!: string;

  @CreatedAt
  create_date!: Date;
}
