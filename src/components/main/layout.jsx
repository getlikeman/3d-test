import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {FaEnvelope, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa6";
import {useColorStore} from '@/components/main/store.js'
import {clsx} from 'clsx';
import logo from '@/assets/logo.png'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {useToast} from "@/components/ui/use-toast"

const list = [
    {icon: <FaTelegram/>},
    {icon: <FaWhatsapp/>},
    {icon:<FaInstagram/>},
    {icon: <FaEnvelope/>}
]
export default function Layout() {
    const  changeColor=useColorStore(state => state.changeColor)
    const  colors=useColorStore(state => state.colors)
    const  currentColor=useColorStore(state => state.currentColor)
    const {toast}=useToast()
    return (<>
        <header className={'absolute w-screen h-16 bg-card top-0 flex flex-row justify-evenly  items-center'}>
            <img src={logo} width={200} alt=""/>
            <nav>
                <ul className={'flex flex-row gap-4'}>
                    {list.map(({icon}) => <li key={self.crypto.randomUUID()}>{icon}</li>)}
                </ul>
            </nav>
        </header>
        <Card className={'absolute  left-4 top-1/4'}>
            <CardHeader>
                <CardTitle>
                    <p>Выберете цвет</p>
                </CardTitle>
            </CardHeader>
            <CardContent className={'grid grid-cols-3 gap-6'}>
                {colors.map(color=> <div key={self.crypto.randomUUID()} onClick={()=>changeColor(color)}  className={clsx('w-6 h-6 border rounded ',{'border-4':color == currentColor})} style={{backgroundColor:color}}></div>)}
            </CardContent>
        </Card>
        <section className={'absolute right-9 bottom-5 flex gap-2 text-2xl'}>
            <Button className={'bg-amber-400 text-2xl p-8'} onClick={()=>toast({
                title:'Ваш дизайн успешно сохранен. ',
                description:'Вы можете вернуться к нему в любой момент.'
            })} >Сохранить дизайн</Button>
            <AlertDialog>
                <AlertDialogTrigger  className={'bg-lime-500 text-2xl p-4 rounded-lg text-amber-50 '}>Отправить в мастерскую</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Вы уверены</AlertDialogTitle>
                        <AlertDialogDescription>
                            Вас устраивает цвет сумки ?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={()=>toast({
                                title:'Ваш заказ принят.',
                                description:'Наш мастер скоро займется заказом.'
                        })}>Да</AlertDialogCancel>
                        <AlertDialogAction>Нет</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    </>)
}
