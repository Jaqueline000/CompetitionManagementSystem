const base = {
    get() {
                return {
            url : "http://localhost:8080/CompetitionManagementSystem/",
            name: "CompetitionManagementSystem",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/CompetitionManagementSystem/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "学科竞赛管理系统"
        } 
    }
}
export default base
