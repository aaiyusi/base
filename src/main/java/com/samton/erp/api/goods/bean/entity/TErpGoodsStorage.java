package com.samton.erp.api.goods.bean.entity;

import java.io.Serializable;

import com.samton.platform.framework.base.BaseBean;

public class TErpGoodsStorage extends BaseBean implements Serializable {
	//主键ID
    private Long gsId;

    //商品ID
    private Long goodsId;

    //仓位ID
    private Long spaceId;

    //是否为默认
    private Short isDefault;

    //状态
    private Short state;

    //企业ID
    private Long enterpriseId;

    //仓库ID
    private Long whouseId;
    
    //仓库数量
    private Integer inventoryCount;

	private static final long serialVersionUID = 1L;

    public Long getGsId() {
        return gsId;
    }

    public void setGsId(Long gsId) {
        this.gsId = gsId;
    }

    public Long getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Long goodsId) {
        this.goodsId = goodsId;
    }

    public Long getSpaceId() {
        return spaceId;
    }

    public void setSpaceId(Long spaceId) {
        this.spaceId = spaceId;
    }

    public Short getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Short isDefault) {
        this.isDefault = isDefault;
    }

    public Short getState() {
        return state;
    }

    public void setState(Short state) {
        this.state = state;
    }

    public Long getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(Long enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public Long getWhouseId() {
        return whouseId;
    }

    public void setWhouseId(Long whouseId) {
        this.whouseId = whouseId;
    }

    public Integer getInventoryCount() {
		return inventoryCount;
	}

	public void setInventoryCount(Integer inventoryCount) {
		this.inventoryCount = inventoryCount;
	}
	
	/**
	 * 临时变量
	 */
	
	private String space_code;

	public String getSpace_code() {
		return space_code;
	}

	public void setSpace_code(String space_code) {
		this.space_code = space_code;
	}
	
}