const svrConfig = {
    host: "127.0.0.1",
    port: 3000,
    mockenable: false,
    proName: '/webpack-demo',//项目名称
    staticFolder: "public"//静态资源托管目录
  };
  const proxyConfig = [
    /* {
      enable : false,
      router: "/test",
      url: ""
    }, */
  ]
  
  const mockConfig = {
    "GET": [{
      
    },
    {
     
    }],
    "POST": [{
  
    }]
  
  };
  module.exports = {
    svrConfig: svrConfig,
    proxyConfig: proxyConfig,
    mockConfig : mockConfig 
  };