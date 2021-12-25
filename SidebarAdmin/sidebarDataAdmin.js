import {HomeOutlined,ContainerOutlined,CodepenOutlined,UserOutlined,CustomerServiceOutlined} from '@ant-design/icons';
 export const sidebarDataAdmin=[
    {
        image: <img src="assets/images/2222.png" alt=""/>
    },
   
    {
        title: "Home",
        icon:  <HomeOutlined />,
        route:'/homeSidebarAdmin'
    },
    
    {
        title: "UserAdmin",
        icon: <UserOutlined/>,
        route:'/useradmin'
    },
    {
        title: "Namespaces",
        icon: <ContainerOutlined />,
        route:'/namespace'
    },
    {
        title: "Pods",
        icon: <CodepenOutlined />,
        route:'/pods'
    },
    {
        title: "Service",
        icon: <CustomerServiceOutlined />,
        route:'/service'
    },
  
]