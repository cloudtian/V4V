import Mock from 'mockjs';

// 配置mock路径
require.config({
    paths: {
        mock: '/mock'
    }
});

Mock.mock('/api/dynamic_data', {
    'age|1-100': 100
});
