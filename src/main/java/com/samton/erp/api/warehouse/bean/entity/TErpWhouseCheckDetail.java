package com.samton.erp.api.warehouse.bean.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import com.samton.platform.framework.base.BaseBean;

public class TErpWhouseCheckDetail extends BaseBean implements Serializable {
    private Long detailId;

    private Long checkId;
    
    private Short type;

    private String sku;

    private Integer count;

    private Integer inventoryCount;

    private Long spaceId;

    private BigDecimal price;

    private Short state;

    private Long enterpriseId;

    private static final long serialVersionUID = 1L;

    public Long getDetailId() {
        return detailId;
    }

    public void setDetailId(Long detailId) {
        this.detailId = detailId;
    }

    public Long getCheckId() {
        return checkId;
    }

    public void setCheckId(Long checkId) {
        this.checkId = checkId;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getInventoryCount() {
        return inventoryCount;
    }

    public void setInventoryCount(Integer inventoryCount) {
        this.inventoryCount = inventoryCount;
    }

    public Long getSpaceId() {
        return spaceId;
    }

    public void setSpaceId(Long spaceId) {
        this.spaceId = spaceId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
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
    
    
    public Short getType() {
		return type;
	}

	public void setType(Short type) {
		this.type = type;
	}
    
    /**
     * 临时字段
     */
    
    public String storgetImage;
    public String name;
    public String difference;
    public String make;
    
    

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getStorgetImage() {
		return storgetImage;
	}

	public void setStorgetImage(String storgetImage) {
		this.storgetImage = storgetImage;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDifference() {
		return difference;
	}

	public void setDifference(String difference) {
		this.difference = difference;
	}
	
	private String spaceCode;

	public String getSpaceCode() {
		return spaceCode;
	}

	public void setSpaceCode(String spaceCode) {
		this.spaceCode = spaceCode;
	}
	
	

}