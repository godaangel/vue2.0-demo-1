/**
 * 配置dev环境下的接口代理路径
 * example: '/api/user_info' 会被转发到 'http://daizong.qq.com:9002/api/user_info'
 */

var target = 'http://daizong.qq.com:3000';

module.exports = {
    proxys: {
        '/book_room': {
            target: target,
            changeOrigin: true
        },
        '/pass': {
            target: target,
            changeOrigin: true
        }
    }
}
