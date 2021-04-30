module.exports = {
    prompts: [{
        type: 'input',
        name: 'key',
        message: '项目名称（英文，以连字符分隔，例如 "www", "app", "h5-wallet"）',
        transformer: function(key) {
            return key.replace(/^(frontend-)*/g, '');
        },
        filter: function(key) {
            return key.replace(/^(frontend-)*/g, '');
        },
        validate: function(key) {
            return /^([a-z0-9]+\-)*[a-z0-9]+$/.test(key);
        }
    }, {
        type: 'input',
        name: 'description',
        message: '项目简介',
        default: function(answers) {
            return '这是' + answers.key + '项目';
        }
    }, {
        type: 'input',
        name: 'port',
        message: '开发调试服务器端口号',
        default: 8080
    }],
    completeMessage: '🎉 Node.js 项目初始化成功！'
};
