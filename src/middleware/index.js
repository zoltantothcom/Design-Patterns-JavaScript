import { toggleMiddleware } from './toggle';
import { submitMiddleware } from './submit';

const middleware = [toggleMiddleware, submitMiddleware];

export default middleware;
