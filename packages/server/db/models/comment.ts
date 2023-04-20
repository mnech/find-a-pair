import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  CreatedAt,
  AutoIncrement,
  AllowNull,
  BelongsTo,
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

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user_id!: number;

  @BelongsTo(() => Topic, {
    foreignKey: 'topic_id',
    as: 'topic',
  })
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
