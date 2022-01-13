import { getSanityContent } from "./api/sanity"

const Page = ({params}) => {
    return (
        <>params.content</>
    )
}

export async function getStaticPaths() {
    // get only all the different volumes
    const data = await getSanityContent({
        query: `
        query AllPages {
            allVolume {
                intro{title, color, content}
                chapters{
                    intro{title, color, content},
                    subchapters{
                    theory{title, color, content}
                    practice{title, color, content}
                    action{title, color, content}
                    exercise{title, color, content}
                    }
                }
            }
        }
    `
    })

    const paths = []

    // paths.push(({ params: { slug: "howdie" } }))
    // console.log(data.allVolume)

    data.allVolume.map((vol, i) => {
        let vol_path = `volume_${i+1}`
        paths.push({ params: { slug: [vol_path]} })
        vol.chapters.map((chap, j) => {
            let chap_path = `chapter_${j+1}`
            paths.push({ params: {slug: [vol_path, chap_path] }})
            
            chap.subchapters.map((sub, k) => {
                let sub_path = `subchapter_${k+1}`
                sub.theory != null &&
                    paths.push({ params: {slug: [vol_path,chap_path,sub_path, "theory"] }}) &&
                    paths.push({ params: {slug: [vol_path,chap_path,sub_path] }})
                sub.practice != null && paths.push({ params: {slug: [vol_path,chap_path,sub_path,"practice"] }})
                sub.action != null && paths.push({ params: {slug: [vol_path,chap_path,sub_path,"action" ] }})
                sub.exercise != null && paths.push({ params: {slug: [vol_path,chap_path,sub_path,"exercise"] }})
            })
        })
    })

    console.log(paths)

    return {
        paths: [...paths],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            params
        }
    }
}

export default Page