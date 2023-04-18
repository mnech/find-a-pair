import {
  Model,
  Column,
  Table,
  DataType,
  AllowNull,
  BelongsTo,
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

  @BelongsTo(() => User, {
    foreignKey: 'id',
    as: 'user',
  })
  user_id!: number;
}
