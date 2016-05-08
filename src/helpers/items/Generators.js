import NameCreator from './NameCreator'
let Items = require('./Items')

export function GenerateTestItem () {
  let item = Items.createEmptyItem()
  item = Items.setName(item, NameCreator.createNameForWeapon(0))
  item = Items.setIcon(item, 'icon.png')
  return item
}

//
// function CreateShoulders(item){
// 	item.addStat('name','Super Duper Shoulders')
// 	item.addStat('types',['shoulders','armor'])
// 	item.addStat('rarity',1)
// 	CreateArmor(item)
// }
//
// function CreateGloves(item){
// 	item.addStat('name','Super Duper Gloves')
// 	item.addStat('types',['gloves','armor'])
// 	item.addStat('rarity',2)
// 	item.addStat('critical_hit_chance',4.5,true)
// 	item.addStat('critical_hit_damage',37.4,true)
// 	CreateArmor(item)
// }
//
// function CreateRing(item){
// 	item.addStat('name','Super Duper Ring')
// 	item.addStat('types',['ring','jewelery'])
// 	item.addStat('rarity',3)
// 	CreateJewelery(item)
// }
//
// function CreateWeapon(item){
// 	item.addStat('name','Super Duper Weapon')
// 	item.addStat('types',['hand','weapon'])
// 	item.addStat('rarity',4)
// 	CreateWeaponI(item)
// }
//
// function CreateHead(item){
// 	item.addStat('name','Super Duper Helmet')
// 	item.addStat('types',['head','armor'])
// 	item.addStat('rarity',5)
// 	CreateArmor(item)
// }
//
// function CreateChest(item){
// 	item.addStat('name','Super Duper but Broken Chest')
// 	item.addStat('types',['chest','armor'])
// 	item.addStat('rarity',0)
// 	CreateArmor(item)
// }
//
// function CreatePants(item){
// 	item.addStat('name','Super Duper Pants')
// 	item.addStat('types',['pants','armor'])
// 	item.addStat('rarity',4)
// 	CreateArmor(item)
// }
//
// function CreateWaist(item){
// 	item.addStat('name','Super Duper Waist')
// 	item.addStat('types',['waist','armor'])
// 	item.addStat('rarity',3)
// 	CreateArmor(item)
// }
//
// function CreateBoots(item){
// 	item.addStat('name','Super Duper Boots')
// 	item.addStat('types',['boots','armor'])
// 	item.addStat('rarity',1)
// 	CreateArmor(item)
// }
//
// function CreateAmu(item){
// 	item.addStat('name','Super Duper Amulet')
// 	item.addStat('types',['amu','jewelery'])
// 	item.addStat('rarity',2)
// 	CreateJewelery(item)
// }
//
//
// function CreateWrist(item){
// 	item.addStat('name','Super Duper Wrist')
// 	item.addStat('types',['wrist','armor'])
// 	item.addStat('rarity',3)
// 	CreateArmor(item)
// }
//
// function CreateShield(item){
// 	item.addStat('name','Super Duper Shield')
// 	item.addStat('types',['hand','armor'])
// 	item.addStat('rarity',2)
// 	item.addStat('block_chance',22,true)
//
// 	CreateArmor(item)
// }
//
// function CreateArmor(item){
// 	item.addStat('armor',10,true)
// 	item.addStat('durabity',10)
// 	item.addStat('max_durabity',10)
// }
//
// function CreateWeaponI(item){
//
//
// 	item.addStat('aps',1.43)
// 	item.addStat('min_dmg',10)
// 	item.addStat('max_dmg',20)
// 	item.addStat('durabity',10)
// 	item.addStat('max_durabity',10)
//
// 	item.getDPS = function(){
// 		return (this.min_dmg + this.max_dmg)* item.aps /2
// 	}
//
// 	item.addVirtualStat('dps','getDPS',item)
//
// }
//
// function CreateJewelery(item){
//
// }
//
//
