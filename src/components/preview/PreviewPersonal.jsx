import "../../styles/preview/PreviewPersonal.css"
import { renderTextWithFormatting } from"../../utils/utils"

export default function PreviewPersonal({personalData}){
    return(
        <div className="previewPersonal">
            <h1 className="previewFullName">{personalData.fullName}</h1>
            <p className="previewEmail">{personalData.email}</p>
            <p className="previewPhoneNumber">{personalData.phoneNumber}</p>
            <div className="previewAddress">
                {renderTextWithFormatting(personalData.address)}
            </div>
            <div className="previewSummary">
                {renderTextWithFormatting(personalData.summary)}
            </div>
        </div>
    )
}