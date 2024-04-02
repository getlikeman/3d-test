import {
    StandardMaterial,
    FreeCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    ArcRotateCamera,
    Color3,
    SceneLoader,
    Texture,

} from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import {useColorStore} from "@/components/main/store.js";

let box;

const  onSceneReady =(scene) => {

   SceneLoader.ImportMesh('',`/`,'bag.babylon',scene,(meshes)=>{
       box=meshes[0]
   })
    const camera =new ArcRotateCamera("Camera", 0, 0, 10, new Vector3(0, 0, 0), scene);
    camera.setPosition(new Vector3(0, 100, 0));

    const canvas = scene.getEngine().getRenderingCanvas();

    camera.attachControl(canvas, true);

    const light = new HemisphericLight("light", new Vector3(0, 2, 0), scene);

    light.intensity = 10;

    // box = MeshBuilder.CreateBox("box", { size: 2 }, scene);


    // box.position.y = 1;

    // MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};
export default  function Scene() {
    const currentColor=useColorStore(state => state.currentColor)
    function  hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        // return {r, g, b}
        return { r, g, b };
    }
    let {r,g,b}= hexToRgb(currentColor)
    const onRender = (scene) => {
        if (box !== undefined) {
            box.scaling.x=0.5
            box.scaling.y=0.5
            box.scaling.z=0.5
            box.position.y=-20
            box.rotation.x=180
            const myMaterial = new StandardMaterial("myMaterial", scene);
            myMaterial.diffuseColor=new Color3(r,g,b)
            box.material=myMaterial

        }
    };
    return(
        <>
            <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} className={'w-full h-screen'} />
        </>
    );
}
