var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0;i < nums.length ; i++){
        const ans = nums[i];
        let res = target - ans;
        if(map[res] !== undefined){
            return [map[res],i];
        }
        map[ans]=i;
    }
    return []
    
};
