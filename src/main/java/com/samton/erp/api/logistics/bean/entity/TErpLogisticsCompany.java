package com.samton.erp.api.logistics.bean.entity;

import com.samton.platform.framework.base.BaseBean;
import java.io.Serializable;
import java.math.BigDecimal;

public class TErpLogisticsCompany extends BaseBean implements Serializable {
	/**
	 * state 0：删除，1：启用，2：停用
	 */
    private Long logisticsId;

    private Short type;

    private Long sysLogisticsId;

    private String name;

    private String eCode;

    private String account;

    private Short expressType;

    private String website;

    private Short autoFreight;

    private Short freightRule;

    private BigDecimal discount;

    private String declareName;

    private String declareEname;

    private BigDecimal declarePercent;

    private BigDecimal minDeclare;

    private BigDecimal maxDeclare;

    private String ebayLogistics;

    private String amazonLogistics;

    private String aliexpressLogistics;

    private String wishLogistics;

    private String dhgateLogistics;

    private String lazadaLogistics;

    private String cdiscountLogistics;

    private String ensogoLogistics;

    private Short printType;

    private Long addressTempId;

    private Long declarationTempId;

    private Long allocationTempId;

    private Long backAddressId;

    private Long addressId;

    private Short state;

    private Long enterpriseId;


    private Short hidetracknumber;

    private Short labelSize;

    private static final long serialVersionUID = 1L;

    public Long getLogisticsId() {
        return logisticsId;
    }

    public void setLogisticsId(Long logisticsId) {
        this.logisticsId = logisticsId;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Long getSysLogisticsId() {
        return sysLogisticsId;
    }

    public void setSysLogisticsId(Long sysLogisticsId) {
        this.sysLogisticsId = sysLogisticsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String geteCode() {
        return eCode;
    }

    public void seteCode(String eCode) {
        this.eCode = eCode;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public Short getExpressType() {
        return expressType;
    }

    public void setExpressType(Short expressType) {
        this.expressType = expressType;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public Short getAutoFreight() {
        return autoFreight;
    }

    public void setAutoFreight(Short autoFreight) {
        this.autoFreight = autoFreight;
    }

    public Short getFreightRule() {
        return freightRule;
    }

    public void setFreightRule(Short freightRule) {
        this.freightRule = freightRule;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public String getDeclareName() {
        return declareName;
    }

    public void setDeclareName(String declareName) {
        this.declareName = declareName;
    }

    public String getDeclareEname() {
        return declareEname;
    }

    public void setDeclareEname(String declareEname) {
        this.declareEname = declareEname;
    }

    public BigDecimal getDeclarePercent() {
        return declarePercent;
    }

    public void setDeclarePercent(BigDecimal declarePercent) {
        this.declarePercent = declarePercent;
    }

    public BigDecimal getMinDeclare() {
        return minDeclare;
    }

    public void setMinDeclare(BigDecimal minDeclare) {
        this.minDeclare = minDeclare;
    }

    public BigDecimal getMaxDeclare() {
        return maxDeclare;
    }

    public void setMaxDeclare(BigDecimal maxDeclare) {
        this.maxDeclare = maxDeclare;
    }


    public Short getPrintType() {
        return printType;
    }

    public void setPrintType(Short printType) {
        this.printType = printType;
    }

    public Long getAddressTempId() {
        return addressTempId;
    }

    public void setAddressTempId(Long addressTempId) {
        this.addressTempId = addressTempId;
    }

    public Long getDeclarationTempId() {
        return declarationTempId;
    }

    public void setDeclarationTempId(Long declarationTempId) {
        this.declarationTempId = declarationTempId;
    }

    public Long getAllocationTempId() {
        return allocationTempId;
    }

    public void setAllocationTempId(Long allocationTempId) {
        this.allocationTempId = allocationTempId;
    }

    public String getEbayLogistics() {
		return ebayLogistics;
	}

	public void setEbayLogistics(String ebayLogistics) {
		this.ebayLogistics = ebayLogistics;
	}

	public String getAmazonLogistics() {
		return amazonLogistics;
	}

	public void setAmazonLogistics(String amazonLogistics) {
		this.amazonLogistics = amazonLogistics;
	}

	public String getAliexpressLogistics() {
		return aliexpressLogistics;
	}

	public void setAliexpressLogistics(String aliexpressLogistics) {
		this.aliexpressLogistics = aliexpressLogistics;
	}

	public String getWishLogistics() {
		return wishLogistics;
	}

	public void setWishLogistics(String wishLogistics) {
		this.wishLogistics = wishLogistics;
	}

	public String getDhgateLogistics() {
		return dhgateLogistics;
	}

	public void setDhgateLogistics(String dhgateLogistics) {
		this.dhgateLogistics = dhgateLogistics;
	}

	public String getLazadaLogistics() {
		return lazadaLogistics;
	}

	public void setLazadaLogistics(String lazadaLogistics) {
		this.lazadaLogistics = lazadaLogistics;
	}

	public String getCdiscountLogistics() {
		return cdiscountLogistics;
	}

	public void setCdiscountLogistics(String cdiscountLogistics) {
		this.cdiscountLogistics = cdiscountLogistics;
	}

	public String getEnsogoLogistics() {
		return ensogoLogistics;
	}

	public void setEnsogoLogistics(String ensogoLogistics) {
		this.ensogoLogistics = ensogoLogistics;
	}

	public Long getBackAddressId() {
        return backAddressId;
    }

    public void setBackAddressId(Long backAddressId) {
        this.backAddressId = backAddressId;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
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


    public Short getHidetracknumber() {
        return hidetracknumber;
    }

    public void setHidetracknumber(Short hidetracknumber) {
        this.hidetracknumber = hidetracknumber;
    }

    public Short getLabelSize() {
        return labelSize;
    }

    public void setLabelSize(Short labelSize) {
        this.labelSize = labelSize;
    }
}