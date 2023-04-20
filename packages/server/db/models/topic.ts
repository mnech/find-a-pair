import {
  Model,
  Column,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';

@Table({
  tableName: 'topic',
})
export class Topic extends Model<Topic> {
  @Column({
    type: DataType.STRING,
  })
  title!: string;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user_id!: number;
}
