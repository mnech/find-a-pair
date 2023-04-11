import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Theme } from './theme';
import { User } from './user';

@Table({
  tableName: 'user_theme',
})
export class Usertheme extends Model<Usertheme> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Theme)
  theme_id!: number;

  @Column({
    type: DataType.TEXT,
  })
  @ForeignKey(() => User)
  @PrimaryKey
  user_id!: string;
}
