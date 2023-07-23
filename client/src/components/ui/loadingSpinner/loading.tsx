import LoadingStyles from "./_loading.module.scss"

type Props = {}

const loading = (props: Props) => {
    return (
        <div className={LoadingStyles.container}>
            <svg className={LoadingStyles.circle_svg} height="100" width="100">
                <circle cx="50" cy="50" r="25"></circle>
            </svg>
        </div>
    )
}

export default loading