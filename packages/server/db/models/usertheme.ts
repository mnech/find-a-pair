import { Model, Table, BelongsTo } from 'sequelize-typescript';
import { User } from './user';
import { Theme } from './theme';

@Table({
  tableName: 'user_theme',
})
export class UserTheme extends Model<UserTheme> {
  @BelongsTo(() => Theme, {
    foreignKey: 'theme_id',
    as: 'theme',
  })
  theme_id!: number;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user_id!: string;
}
