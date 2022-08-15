/* --------------------------------------------------------
 * Author Võ Bách Nhạc
 * Email vonhac.20394@gmail.com
 * Phone 0906.918.738
 * Created: 2022-03-30
 *------------------------------------------------------- */
import { AuthGuard } from '@nestjs/passport';

export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }
}
