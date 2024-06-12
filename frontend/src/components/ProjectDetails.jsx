import { useLocation } from 'react-router-dom'
// import Markdown from 'markdown-to-jsx'



const ProjectDetails = () => {
    let {state} = useLocation()
    
  return (
        // <ReactMarkdown remarkPlugins={[remarkGfm]}>{state?.projectData?.markDownContent}</ReactMarkdown>
        <div>

            {/* <Markdown> {state?.projectData?.markDownContent}  </Markdown> */}
        </div>
  )
}

export default ProjectDetails