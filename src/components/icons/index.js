import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { Delete, DownArrow } from './styles/icons'

export function DeleteIcon({ children, ...restProps }) {
  return (
    <Delete {...restProps}>
      <FontAwesomeIcon icon={faMinusCircle} />
    </Delete>
  )
}

export function DownArrowIcon({ children, ...restProps }) {
  return (
    <DownArrow {...restProps}>
      <FontAwesomeIcon icon={faAngleDown} />
    </DownArrow>
  )
}
