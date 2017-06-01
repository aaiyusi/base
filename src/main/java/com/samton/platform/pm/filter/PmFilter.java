package com.samton.platform.pm.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.samton.platform.framework.bean.UserCacheBean;
import com.samton.platform.framework.exception.FilterException;
import com.samton.platform.framework.util.CurrentUtil;
import com.samton.platform.pm.constant.PmExpCodeConstant;

public class PmFilter implements Filter{
	
	private Set<String> passPath;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		passPath=new HashSet<String>();
		//后台接口
		passPath.add("/platform/pm/login");
		passPath.add("/platform/pm/generateCheckCode");
		passPath.add("/api/pm/registerUser");
		passPath.add("/api/pm/generateCheckCodeRegister");
		//前台页面
		passPath.add("/resources/platform/views/login");
		passPath.add("/resources/platform/views/register");
		
		
		passPath.add("/api/catalog/getCatalogList.do");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req=(HttpServletRequest)request;
		String servletPath=req.getServletPath();
		int index=servletPath.indexOf(".");
		if(index!=-1){			
			servletPath=servletPath.substring(0,index);
		}
		if(passPath.contains(servletPath)){
			chain.doFilter(request, response);
			return;
		}
		if(servletPath.indexOf("face") > -1){
			chain.doFilter(request, response);
			return;
		}
		
		
		UserCacheBean userCacheBean=CurrentUtil.getCurrentUser();
		try {
			if(userCacheBean==null){
				throw new FilterException(PmExpCodeConstant.PM_SESSION_EXPIRE,null);
			}else {
				/*String userIdStr=req.getParameter("userId");
				//验证接口的userId是否为该用户
				if(StringUtils.isNotEmpty(userIdStr)&&Long.parseLong(userIdStr)!=userCacheBean.getUserId()){
						throw new FilterException(PmExpCodeConstant.PM_ACCESS_DENIED,userCacheBean.getUserId()+"非法改变userId"+userIdStr);
				}*/
//				List<String> actionUrls=pmCacheService.getActionUrlByUserId(userCacheBean.getUserId());
//				if(!actionUrls.contains(servletPath)){
//					throw new FilterException(PmExpCodeConstant.PM_ACCESS_DENIED,userIdStr+"非法访问接口"+servletPath);
//				}
			}
			chain.doFilter(request, response);
		} catch (FilterException e) {
			renderHtml("<script>window.top.location.href='"+req.getContextPath() + "/resources/platform/views/login.jsp';</script>", (HttpServletResponse)response);
//			((HttpServletResponse)response).sendRedirect(req.getContextPath()+"/resources/platform/views/login.jsp");
//			response.setContentType("application/json; charset=UTF-8");
//			response.getWriter().print(e.processException());
			return;
		}
	}

	@Override
	public void destroy() {
		
	}

	private void clearRespCache(HttpServletResponse resp){
		// 清除HTTP缓存
		HttpServletResponse httpResp = (HttpServletResponse) resp;
		httpResp.setCharacterEncoding("UTF-8");  
		httpResp.setContentType("text/html; charset=UTF-8");  
		httpResp.setHeader("Cache-Control", "no-store");  
		httpResp.setHeader("Pragma", "no-cache");  
		httpResp.setDateHeader("Expires", 0);

	}
	
	//直接输出HTML
	private void renderHtml(String msg, HttpServletResponse resp) throws IOException {
		clearRespCache(resp);
		PrintWriter print = resp.getWriter();
		print.print(msg);
		print.flush();
		print.close();
	}
}