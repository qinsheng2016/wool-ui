import { Pos } from './Pos.model';

export const POS: Pos[] = [
  {
    id: 1,
    description: '',
    organization: '电银信',
    rate: '万60',
    blacklist: [],
  },
  {
    id: 2,
    description: '',
    organization: '乐刷',
    rate: '万60',
    blacklist: ['光大银行'],
  },
  {
    id: 3,
    description: '',
    organization: '钱宝',
    rate: '刷卡费率0.53,1000以下手机付0.3费率,云闪付扫费率0.3',
    blacklist: [],
  },
];
