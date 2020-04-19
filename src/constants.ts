export const ASSET_WIDTH = {
    TINY: 150,
    SMALL: 300,
    MEDIUM: 450,
    LARGE: 600,
    OOH_BOI: 900
}

export  const ASSETS_NAMES = {
    GROUND: {
        TINY: 'ground_tiny',
        SMALL: 'ground_small',
        MEDIUM: 'ground_medium',
        LARGE: 'ground_large',
        OOH_BOI: 'ground_ohh_boi'
    }
}

export const ASSET_WIDTH_MAPPING = {
    GROUND : {
        [ASSETS_NAMES.GROUND.TINY]: ASSET_WIDTH.TINY,
        [ASSETS_NAMES.GROUND.SMALL]: ASSET_WIDTH.SMALL,
        [ASSETS_NAMES.GROUND.MEDIUM]: ASSET_WIDTH.MEDIUM,
        [ASSETS_NAMES.GROUND.LARGE]: ASSET_WIDTH.LARGE,
        [ASSETS_NAMES.GROUND.OOH_BOI]: ASSET_WIDTH.OOH_BOI
    }
}