import userBoxStyle from './_userBox.module.scss'

type Props = {
    boxTitle: string,
    boxIcon?: React.ReactNode,
    userInfo: string;
}

const userBox = (props: Props) => {
    const {boxIcon, boxTitle, userInfo} = props;

  return (
        <div className={userBoxStyle.userbox}>
            <div className={userBoxStyle.user__boxIcon}>{boxIcon}</div>
            <h4 className={userBoxStyle.user__boxTitle}>{boxTitle}</h4>
            <h3 className={userBoxStyle.user__info}>{userInfo}</h3>
        </div>
  )
}

export default userBox