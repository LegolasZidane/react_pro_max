import DefaultPage from "./DefaultPage.jsx";
import AddProjectPage from "./AddProjectPage.jsx";
import ProjectPage from "./ProjectPage.jsx";


export default function Content({ addPressed, projectPressed, onClickCancel }){

    return (
        <div className="w-[70%]" id="content">
            { !addPressed && !projectPressed && <DefaultPage /> }
            { addPressed && <AddProjectPage onClickCancel={onClickCancel}/>}
            { projectPressed && <ProjectPage />}
        </div>
    );

}